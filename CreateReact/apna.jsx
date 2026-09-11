// function Render(instagram, maincontainer) {
//     const dom = document.createElement(instagram.type);

//     dom.innerHTML = instagram.children;

//     // attribute set
//     dom.setAttribute('href', instagram.props.href);
//     dom.setAttribute('target', instagram.props.target);

//     container.appendChild(dom);
// }

// const instagram = {
//     type: 'a',
//     props: {
//         href: 'https://instagram.com',
//         target: '_blank'
//     },
//     children: 'Instagram'
// };


// for YouTube
// function customRender(element, container) {
//     const domele = document.createElement(element.type);

//     domele.innerHTML = element.children;

//     domele.setAttribute('href', element.props.href);
//     domele.setAttribute('target', element.props.target);

//     container.appendChild(domele);
// }
function customRender(element, container) {
    const domele = document.createElement(element.type);

    domele.innerHTML = element.children;

    for (const prop in element.props) {
        if (prop == "children") continue;

        domele.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domele);
}

const element = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    children: 'YouTube'
};

const container = document.getElementById('root');

customRender(element, container);