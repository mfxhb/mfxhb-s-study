/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:49:45
 * @LastEditTime: 2022-11-27 10:51:10
 * @Description:
 */
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    alias?: string;
  }
}

interface NavListItemType {
  label: string;
  value: string;
}
