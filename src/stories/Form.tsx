import Form from "@rjsf/core";

const schema: any = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const log = (type: string) => console.log.bind(console, type);

export const RJSF = () => (
  <Form
    schema={schema}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);
