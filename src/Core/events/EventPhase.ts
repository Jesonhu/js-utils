/**
     * EventPhase 可为 Event 类的 eventPhase 属性提供值。
     */
    export const enum EventPhase{
      /**
       * 捕获阶段。
       */
      CAPTURING_PHASE = 1,
      /**
       * 目标阶段，是事件流的第二个阶段。
       */
      AT_TARGET = 2,
      /**
       * 冒泡阶段。
       */
      BUBBLING_PHASE = 3
  }