import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useRouteParam<T = string | string[]>(param: string) {
  const route = useRoute();

  return computed(() => {
    return route.params[param] as T;
  });
}
