import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19140963/pexels-photo-19140963/free-photo-of-vineta-on-the-stormthaler-see-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          aspernatur accusamus ipsum esse placeat reprehenderit eligendi
          pariatur laborum nisi, tempora aliquid amet laudantium deserunt quod
          sequi similique? Culpa, reprehenderit praesentium. Quidem
          reprehenderit laudantium sit, recusandae corrupti autem hic et
          dignissimos rerum cumque aperiam nesciunt blanditiis reiciendis
          corporis iure vero in animi harum aspernatur voluptatem iste enim
          velit. Quo, consectetur iste!
        </p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
