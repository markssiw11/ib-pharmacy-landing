declare global {
  interface Window {
    Tracker: {
      identify: (userId: string, traits?: Record<string, any>) => void;
      reset: () => void;
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}

export const Tracker = {
  identify: (userId: string, traits?: Record<string, any>) => {
    try {
      if (window.Tracker && typeof window.Tracker.identify === "function") {
        window.Tracker.identify(userId, traits);
      } else {
        console.warn(
          "Tracker is not initialized or identify function is not available."
        );
      }
    } catch (error) {
      console.error("Error calling tracker profile identify:", error);
    }
  },
  reset: () => {
    try {
      if (window.Tracker && typeof window.Tracker.reset === "function") {
        window.Tracker.reset();
      } else {
        console.warn(
          "Tracker is not initialized or reset function is not available."
        );
      }
    } catch (error) {
      console.error("Error calling tracker profile reset:", error);
    }
  },
  track: (event: string, properties?: Record<string, any>) => {
    try {
      if (window.Tracker && typeof window.Tracker.track === "function") {
        window.Tracker.track(event, properties);
      } else {
        console.warn(
          "Tracker is not initialized or track function is not available."
        );
      }
    } catch (error) {
      console.error("Error calling tracker profile track:", error);
    }
  },
};
