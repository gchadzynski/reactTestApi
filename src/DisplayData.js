import React, {
    Component
} from 'react';

const API = 'https://jsonplaceholder.typicode.com/photos?';

class DisplayData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            message: props.message,
            loaded: false
        };
    }

    getData() {
        console.log(this.state.message);
        fetch(API + '_page='+this.state.message+'&_limit='+ this.state.message)
          .then(response => response.json())
          .then(data => this.setState({ hits: data }));
      }

      componentWillUpdate(nextProps, nextState) {
          console.log(nextProps);
        if (this.state.loaded = false) {
            this.setState({message: nextState.message});
            this.getData();
        }
      }

      componentDidUpdate(prevProps, prevState) {
        this.setState({loaded: true});
      }

    render() {
        /*console.log(this.props);
        this.setState({loaded: this.props.refresh});
        if(this.state.loaded){
            this.setState({message: this.props.message});
        this.getData();
        this.setState({loaded: true});
        }*/
        const { hits } = this.state;

        return (
          <div>
          <ul>
            {hits.map(hit =>
              <li key={hit.id}>
                <p>{hit.title}</p>
                <img src={hit.thumbnailUrl} alt={hit.title}/>
              </li>
            )}
          </ul>
          </div>
        );
    }
}

export default DisplayData;