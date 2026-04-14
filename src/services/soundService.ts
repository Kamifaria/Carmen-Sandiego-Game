/**
 * SoundService - Handles ambient sounds and UI feedback
 */

class SoundService {
  private ambientAudio: HTMLAudioElement | null = null;
  private uiAudio: HTMLAudioElement | null = null;

  playAmbient(src: string, loop: boolean = true) {
    if (this.ambientAudio) {
      this.ambientAudio.pause();
    }
    this.ambientAudio = new Audio(src);
    this.ambientAudio.loop = loop;
    this.ambientAudio.volume = 0.4;
    this.ambientAudio.play().catch(e => console.log("Ambient play blocked", e));
  }

  playSFX(src: string) {
    const sfx = new Audio(src);
    sfx.volume = 0.6;
    sfx.play().catch(e => console.log("SFX play blocked", e));
  }

  stopAmbient() {
    if (this.ambientAudio) {
      this.ambientAudio.pause();
      this.ambientAudio = null;
    }
  }
}

export const soundService = new SoundService();
