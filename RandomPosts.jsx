/************************************************************* 
* Random posts with dummy data that will appear on the feed. *
* Author: Nikos-Nikitas                                      *
**************************************************************/
import React from 'react';

class RandomPosts extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              randomtxt : [
              'Alice posted: What a wonderful day!',
              'Bob posted: So excited to see the match!',
              'Charlie posted: Commodo varius. Curabitur condimentum etiam viverra felis felis.',
              'David posted: Hendrerit suscipit lacinia. Dui. Primis vestibulum rhoncus taciti porta interdum lacinia vivamus vitae justo sollicitudin.',
              'Eric posted: Viverra ante dui. Fusce nonummy mattis senectus inceptos interdum. Torquent aptent non praesent morbi ipsum tristique. Tristique. Magnis integer.'
              ],
              r:''
          };

          this.nextR = this.nextR.bind(this);
      }
          //random posts are generated every 3 seconds by rID.

      componentDidMount() {
      this.rID = setInterval(
          () => this.nextR(),
          3000
      );   
  }

  componentWillUnmount() {
      clearInterval(this.rID);
  }
  nextR() {
      this.setState(
          {
              r: this.state.randomtxt[Math.ceil(Math.random() * 4)]
          }
      );
  }

      render() {

          return(
              <div id="randomdiv">
                  <h3> What others post.</h3>
                  <br/>
                  <ul id="randomlist">
                      <li id="randompost" >
                      {this.state.r}
                      </li>
                      <br/>
                  </ul>
              </div>
          );

      }

  }
