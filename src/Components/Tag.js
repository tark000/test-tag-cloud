import React from 'react';
import {Link} from 'react-router-dom';
import Title from './Title';

function Tag (props) {
    const tag = props.tag
    return (<div>
        <Title title="Tag content"/>
        <Link to="/">Home</Link>

        {(tag &&
          <ul>
          <li><h3>Label: {tag.label}</h3></li>
          <li>Total Mentions: {tag.volume || 0}</li>
          <li>Positive Mentions: {tag.sentiment.positive || 0}</li>
          <li>Neutral Mentions: {tag.sentiment.neutral || 0}</li>
          <li>Negative Mentions: {tag.sentiment.negative || 0}</li>
          {(tag.pageType &&
            <li>List of page types:
            <ul>
            {
              Object.keys(tag.pageType).map(function(key,index) {
                return <li key={index}>{key}: {tag.pageType[key]}</li>
              }, this)
            }
            </ul>
            </li>
          )}
          </ul>
        )}

        {(!tag && <Title title="Dont have this tag"/>)}
    </div>)
}

export default Tag;
