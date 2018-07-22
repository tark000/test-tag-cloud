import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Title from './Title';

function TagsList(props) {
  const tags = props.tags
  return <div>
      <Title title="Tags list page"/>
      <ul className="tags-list">
        {tags.map((tag, index) =>
          <li key={tag.id}>
            <Link to={tag.id} className="tag" style={{width: tag.sentimentScore + "px"}} >
              {tag.label}
              <span>{tag.label}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>

}
TagsList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagsList;
