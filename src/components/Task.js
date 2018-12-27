import React from "react";
import { Asset, AppLoading } from "react-native";
import { Profiles, type Profile } from "./components";

const profiles: Profile[] = [
  {id: 1, profile: require('../../res/images/111.jpg')},
  {id: 2, profile: require('../../res/images/222.jpg')},
  {id: 3, profile: require('../../res/images/333.jpg')},
  {id: 4, profile: require('../../res/images/444.jpg')}
];

type AppState = {
  ready: boolean,
};

export default class Task extends React.Component<{}, AppState> {
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Promise.all(profiles.map(profile => Asset.loadAsync(profile.profile)));
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <AppLoading />
      );
    }
    return (
      <Profiles {...{ profiles }} />
    );
  }
}