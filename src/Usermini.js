import React from 'react';


class Usermini extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
    this.out = this.out.bind(this);
  }

  click() {
      this.props.onClick(this.props.user);
  }

  out() {
      this.props.onClick('out');
  }

  render() {
    return (
       <div className='user-list' onClick={this.props.host ? ()=>false : this.click}>
          <div className='ava-list'>
            <img src={this.props.ava ? this.props.ava : '/img/user.png'}/>
          </div>
          <div className='user-info'>
            <h5>{this.props.user}</h5>
            <p>{this.props.prof ? this.props.prof : 'не заполнено'}</p>
            {this.props.host ? <div>
                                  <span onClick={this.out}><img src='/img/logout.png'/></span>
                                  <span onClick={this.click}><img src='/img/info.png'/></span>
                                </div>
                             : <span></span>
            }
          </div>
          <img className='status' src={this.props.online ? '/img/on.png' : '/img/off.png'}/>
      </div>
    )
  }
}

export default Usermini;
