import React, { Component } from 'react';
import Post from './Post';
import { Link } from 'react-router';

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount () {
    fetch('http://localhost:8080/api').then(r => r.json())
      .then((data) => {
        this.setState({posts: data.posts})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(function (podt, id) {
          return <Link to={`/${id}`} key={id}>{post.title}</Link>;
        })}
        {this.props.children}
      </div>
    );
  }
}
