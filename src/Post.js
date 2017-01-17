import React, { Component } from 'react';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {}
    };
    this.fetchPost = this.fetchPost.bind(this);
  }

  componentWillMount () {
    this.fetchPost(this.props.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchPost(nextProps.params.postId);
  }

  fetchPost(postId) {
    console.log(this.props.params.postId);
    fetch(`http://localhost:8080/api/${postId}`).then(r => r.json())
      .then((data) => {
        console.log(data);
        this.setState({ post: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.props.params.postId}
        <h1>{this.state.post.author}</h1>
        <h2>{this.state.post.title}</h2>
        <h2>{this.state.post.text}</h2>
      </div>
    );
  }
}
