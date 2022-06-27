function homePage({ posts }) {
    return (
        <div>
            <h1>welcome to My Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default homePage;

// 빈번하게 변경되는 데이터는 server side props를 사용한다
// 빌드를 할 때마다 새롭게 페이지가 갱신되기 때문에 렌더링이 느리다
// export const getServerSideProps = async() => {
//     const res = await fetch('http://localhost:8080/api/posts');
//     const posts = await res.json();

//     return {
//         props: {
//             posts
//         }
//     }
// }

// 미리 파일을 생성해서 접근을 바로바로 할 수 있고 그렇게 해서 만들어진 html을 보여주는 방식
// 미리 데이터가 포함되어 있는 html을 만들어 놓기때문에 빠르게 렌더링이 가능하다
// revalidate옵션을 사용하여 지정해놓은 초 이후 변경이 일어났을 때 업데이트가 일어난다
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
    const posts = await res.json();

    return {
        props: {
            posts
        },
        revalidate: 20 // 초단위, 20초가 지난 시점부터 접속이 일어나면 데이터가 변경된다
    }
}