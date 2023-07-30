export const Body = (): any => `
    <body
      class="flex w-full h-screen justify-center items-center"
      hx-get="/todos"
      hx-swap="innerHTML"
      hx-trigger="load"
    />
`;
