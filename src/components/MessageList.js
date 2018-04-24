import React, {Component} from 'react';

class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      content: "",
      sentAt: "",
      roomId: "",
      messages:[],
      displayMessages: [],
      newMessage:''
    };

    this.messagesRef = this.props.firebase.database().ref('messages')
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      console.log(message.content);
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message )});
    });
  }

  componentWillReceiveProps(nextProps){
    this.updateDisplayMessages(nextProps.activeRoom);
  }

  createMessage(newMessage) {
    this.messagesRef.push({
      username: this.props.user,
      content: newMessage,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom
    });
    this.setState({ newMessage: '' });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({newMessage: e.target.value});
  }

  updateDisplayMessages(activeRoom){
    if(!activeRoom) {return}
    this.setState({ displayMessages: this.state.messages.filter(message => message.roomId  === activeRoom.key)})
    this.setState({ messages: this.state.messages.filter(message => message.roomId  === activeRoom.key)})
    console.log(activeRoom)
  }

  render() {
    return (
      <main id="messages">
      <h2 className="room-name">{this.props.activeRoom ? this.props.activeRoom.name : ''}</h2>
      <ul id="message-list">
        {this.state.messages.map((message) =>
            <li key={message.key}>{message.content} {message.roomId}</li>
        )
        }
      </ul>
      </main>
    );
  }

}

export default MessageList;