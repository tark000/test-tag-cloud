import React, { Component } from 'react';
import TagsList from './TagsList';
import Tag from './Tag';
import { Route } from 'react-router-dom';
import tagsList from '../Data/Tags';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      tags: tagsList
    }
    this.setTag = this.setTag.bind(this);
  }

  setTag (params) {
    let tag = this.state.tags.find(value => value.id === params.match.params.id);
    if (!tag) {
      tag = this.state.tags.find(value => value.id === params.location.pathname.substring(1));
    }
    return tag;
  }

  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={() => (
            <TagsList tags={this.state.tags} />
          )}
        />

        <Route path="/:id" render={(params)=> {
          return <Tag tag={this.setTag(params)} />
        }}/>

      </div>
    )
  }
}

export default Main;
