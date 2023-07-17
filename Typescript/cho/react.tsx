import { Component, FormEvent } from "react";

interface P {
  name: string;
  title: string;
}
interface S {
  word: string;
  value: string;
}

class RC extends Component<P, S> {
  state = {
    name: "yelim",
    value: "",
    result: "",
    word: "",
  };

  onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    this.setState({ value: "" });
  };

  render() {
    return "hello";
  }
}

export const A = () => {
  return <RC name="myname" title="test" />;
};
