import { ref } from 'vue';
export const useSharedStore = () => {
  const count = ref(0);
  const message = ref('');

  const increment = () => {
    console.log('cue state');

    count.value++;
  };

  return {
    count,
    message,
    increment,
  };
};
