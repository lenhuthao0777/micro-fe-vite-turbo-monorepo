/// <reference types="vite/client" />

declare module 'cue_remote/store' {
  import { Ref } from 'vue';

  export interface SharedStore {
    count: Ref<number>;
    message: Ref<string>;
    increment: () => void;
  }

  export const useSharedStore: () => SharedStore;
}

declare module 'cue_remote/' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'react_remote/' {
  import * as React from 'react';
  const ReactApp: React.ComponentType<any>;
  export default ReactApp;
}
