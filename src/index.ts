import { ElementFlags } from "typescript";
import "./style.scss";

function createNavElement(name: string) {
    const element = document.createElement('div');
    element.innerHTML = name;
    return element;
}

function hamMenu() {
    const element = document.createElement('div');
    element.className = 'navbar-ham';
    element.appendChild(document.createElement('span'));
    element.appendChild(document.createElement('span'));
    element.appendChild(document.createElement('span'));



    return element;
}

function rightNavBarSide(clc: Array<HTMLElement>) {
    const element = document.createElement('div');
    element.className = 'navbar-right';
    clc.map(e => {
        element.appendChild(e);
    });
    return element;
}

function navBar() {
    const navContainer = document.createElement('div');
    navContainer.className = 'navbar-container';

    const element = document.createElement('div');

    element.className = 'navbar';

    const btn = document.createElement('div');
    btn.innerHTML = 'text';

    element.appendChild(btn);

    const rbar = rightNavBarSide([
        createNavElement("Test"),
        createNavElement("Test"),
        createNavElement("Test")
    ]);

    element.appendChild(rbar);

    const hmenu = hamMenu();
    hmenu.onmouseover = function(e) {
            rbar.style.display = 'block';
            rbar.style.position = 'absolute';
            rbar.style.left = e.clientX.toString() + 'px';
            rbar.style.top = e.clientY.toString() + 'px';
    };

    hmenu.onmousemove = function(e) {
            rbar.style.left = e.clientX.toString() + 'px';
            rbar.style.top = e.clientY.toString() + 'px';
    }

    hmenu.onmouseout = function(e) {
            rbar.style.display = 'none';    
    };

    element.appendChild(hmenu);

    navContainer.append(element);

    return navContainer;
}

function projectName() {
    const element = document.createElement('div');
    element.className = 'projectname';

    const prtitle = document.createElement('div');
    prtitle.className = 'title'
    prtitle.innerHTML = 'Project Title';

    element.appendChild(prtitle);

    return element;
}

function contactUs() {
    const element = document.createElement('div');

    const subElement = document.createElement('button');
    subElement.innerHTML = 'Contact Us!';

    element.appendChild(subElement);

    return element;
}


function subtitle() {
    const element = document.createElement('div');
    element.className = 'subtitle-container';


    const sub = document.createElement('div');
    sub.innerHTML = 'Subtitle';
    sub.className = 'title';

    const ipsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

    const subblock1 = document.createElement('div');
    subblock1.className = 'subblock';

    const subblock2 = document.createElement('div');
    subblock2.className = 'subblock reverse';

    const img1 = document.createElement('img');
    img1.src = 'https://i.stack.imgur.com/mwFzF.png';

    const div1 = document.createElement('div');
    div1.innerHTML = ipsum;

    const img2 = document.createElement('img');
    img2.src = 'https://i.stack.imgur.com/mwFzF.png';

    const div2 = document.createElement('div');
    div2.innerHTML = ipsum;

    subblock1.append(img1, div1);
    subblock2.append(div2, img2);

    element.append(sub, subblock1, subblock2);

    return element;
}


function contactForm() {
    const el = document.createElement('div');
    el.className = 'contact-form__container';

    const title = document.createElement('div');

    title.innerHTML = 'Contact Form';
    title.className = 'title';

    const frm = document.createElement('form');

    const inpt = document.createElement('input');
    const inpt1 = document.createElement('input');
    const inpt2 = document.createElement('textarea');
    const inpt3 = document.createElement('button');
    inpt3.innerHTML = 'Submit';

    frm.append(inpt, inpt1, inpt2, inpt3);

    el.append(title, frm);

    return el;

}

function createLineContainer(container_name: string, linknames: Array<string>) {

    const line = document.createElement('div');
    line.className = 'line__container';

    const linename = document.createElement('div');
    linename.innerText = container_name;
    const linelinks = document.createElement('div');
    linelinks.className = 'links';

    linknames.map(e => {
        const link = document.createElement('div');
        link.innerText = e;
        linelinks.append(link);
    });

    line.append(linename, linelinks);

    return line;
}

function footer() {
    const element = document.createElement('div');
    element.className = 'footer';

    const footercontainer = document.createElement('div');
    footercontainer.className = 'footer__container';

    const addr = createLineContainer('Address', ['Link1', 'Link2']);
    const phone = createLineContainer('Phone', ['Link3', 'Link4']);
    const email = createLineContainer('Email', ['Link5', 'Link6']);

   

    const hline = document.createElement('hr');

    const copyright = document.createElement('div');

    copyright.innerText = "Copyright";
    copyright.className = 'copyright';

    footercontainer.append(addr, phone, email, hline, copyright);
    element.append(footercontainer);

    return element;
}

function main() {
    const element = document.createElement('div');
    element.className = 'appcontainer';

    const subcontainer = document.createElement('div');
    subcontainer.className = 'subappcontainer';

    const proj = projectName();
    proj.appendChild(contactUs());
    element.appendChild(proj);




    subcontainer.append(
        navBar(), 
        proj, 
        subtitle(), 
        contactForm(),
        footer()
    );
    element.append(subcontainer);

    return element;
}

document.body.appendChild(main());
