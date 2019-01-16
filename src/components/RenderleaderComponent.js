import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Fade } from 'react-animation-components';

function RenderLeader({leader}) {
  return(
    <Fade in>
    <Media tag="li" className="mt-5">
        <Media left href="#" className="mr-4">
          <Media object src={baseUrl + leader.image} alt={leader.name} />
        </Media>
        <Media body>
          <Media heading>
            {leader.name}
          </Media>
          <p>{leader.designation}</p>
          <p className="mt-2">{leader.description}</p>
        </Media>
      </Media>
    </Fade>
  );
}

export default RenderLeader;
