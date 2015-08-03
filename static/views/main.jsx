var CommentBox = require('../blocks/CommentBox/CommentBox.jsx');

var data = [
    {author: 'Dave', text: 'hello'},
    {author: 'Max', text: 'bye'}
];

React.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);