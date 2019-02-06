import React from 'react';
import BlogCard from "./BlogCard";


const Blog = () => {
  return (
    <div className="d-flex flex-column w-100 h-100">
      <BlogCard title="Test" summary="Summary Line"/>
      <BlogCard title="Test 2" summary="Summary Line 2"/>
      <BlogCard title="Test 3" summary="Summary Line 3"/>
      <BlogCard title="Test 4" summary="Summary Line 4"/>
      <BlogCard title="Test 5" summary="Summary Line 5"/>
      <BlogCard title="Test 6" summary="Summary Line 6"/>
    </div>
  );
};

export default Blog;
