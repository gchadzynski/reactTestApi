import React, {
    Component
} from 'react';

const API = 'https://jsonplaceholder.typicode.com/photos?_page={this.sate.message}&_limit=5';

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
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ hits: data }));
      }

    render() {
        console.log(this.props);
        if(!this.state.loaded){
        this.getData();
        this.setState({loaded: true});
        }
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