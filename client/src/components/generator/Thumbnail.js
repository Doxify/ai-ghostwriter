import React from 'react';
import './generator.scss';

class Thumbnail extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card m-4">
                <div className="card-body">
                    <small className="text-muted float-left">Title Goes Here</small>
                    <small className="text-muted float-right">23 min. ago</small><br/>
                    <p className="card-text text-left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It 
                        was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.... into electronic typesetting, remaining essentially unchanged. It 
                        was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
        <button className="btn btn-block btn-primary float-right">Open <e>Title Goes Here</e></button>
                </div>
            </div>
        )
    }

}

export default Thumbnail;