import React from "react";
import styles from './projects.module.css'

const Projects = ({ blogs }) => {
  return (
    <div className={styles.mainDiv}>
      {blogs.map((blog) => (
        <div key = {blog.id} style={{border:'1px solid black', borderRadius:'10px',top:'10px'}}>
            <h2>{blog.name}</h2>
            <h4>{blog.full_name}</h4>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  let res = await fetch(
    "https://api.github.com/search/repositories?q=user:Loki343+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await res.json();

  return {
    props: {
      blogs: data.items,
    },
  };
}

export default Projects;
