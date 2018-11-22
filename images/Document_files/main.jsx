import React from 'react';
import ReactDOM from 'react-dom';
import tweets from '../../data/tweets.json';


function Tweet (props){
  return <div>{props.tweet}</div>;
  console.log(props);
};

function TweetList (tweets){
  return (
    <div>
      {
      tweets.forEach(function(e) {
        <Tweets tweet="e" />
      });
      }
    </div>
  );
}

ReactDOM.render(
  <Tweets />,
  document.getElementById('root')
);
