export const logItem = (itemToRender) => {
  console.log(
    `${itemToRender.id}. [${itemToRender.done ? 'x' : ' '}] ${
      itemToRender.task
    }`,
  );
};
