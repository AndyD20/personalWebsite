import React from 'react';


const BlogCard = ({title, img_src, summary}) => {

  let outer_style = {
    padding: '20px',
  };

  let inner_style = {
    backgroundColor: 'white',
    height: '10%',
    minWidth: '10%',
    minHeight: '30%',
  };

  return (
    <div style={outer_style}>
      <div style={inner_style}>
        <img src={img_src} alt=" "/>
        <h3 className="p-3">{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default BlogCard;
