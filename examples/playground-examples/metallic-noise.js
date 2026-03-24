import {
  float32ArrayToWav,
  HPF,
  lerp,
  SquareOscillator,
} from '@0b5vr/experimental';

export default ({ divContainer }) => {
  const sampleRate = 44100;
  const seconds = 1.0;
  const nSamples = Math.floor(sampleRate * seconds);
  const nOscillators = 6;

  // prepare stuff
  const oscillators = [...Array(nOscillators)].map((_, i) => {
    const logFreq = lerp(
      Math.log2(200.0),
      Math.log2(450.0),
      i / (nOscillators - 1),
    );
    const freq = 2.0 ** logFreq;
    return new SquareOscillator(freq / sampleRate);
  });

  const hpf1 = new HPF(5900.0 / sampleRate, 2.0);
  const hpf2 = new HPF(6500.0 / sampleRate, 2.0);

  let env = 1.0;

  const samples = new Float32Array(nSamples);

  // main synthesis loop
  for (let iSample = 0; iSample < nSamples; iSample++) {
    let sample = 0.0;

    // metallic oscillators
    for (let iOsc = 0; iOsc < nOscillators; iOsc++) {
      sample += oscillators[iOsc].process();
    }
    sample /= nOscillators;

    // hpf 1
    sample = hpf1.process(sample);

    // waveshaper
    sample = Math.sign(sample) * Math.pow(Math.abs(sample), 0.3);

    // hpf 2
    sample = hpf2.process(sample);

    // envelope
    env *= Math.exp(-20.0 / sampleRate);

    samples[iSample] = env * sample;
  }

  // convert to wav
  const wav = float32ArrayToWav([samples], sampleRate);

  // create audio element
  const audioElement = document.createElement('audio');
  audioElement.controls = true;
  divContainer.appendChild(audioElement);

  const blob = new Blob([wav], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  audioElement.src = url;

  return () => {
    URL.revokeObjectURL(url);
  };
};
