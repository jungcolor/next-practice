import HeadInfo from '../components/HeadInfo';
import photosStyles from '../styles/Photos.module.css';
import Link from 'next/link';


function photos({ photos }) {
    console.log(photos[0].thumbnailUrl);
    return (
        <div>
            <HeadInfo title='My Blog Photos' />
            <h1>My Photos</h1>
            <ul className={photosStyles.photos}>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                            <a>
                                <img src={photo.thumbnailUrl} width={100} height={100} alt={photo.title} />
                                <span>{photo.title}</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default photos;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
    const photos = await res.json();

    return {
        props: {
            photos
        }
    }
}