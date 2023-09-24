
import Accordion from '../components/Accordion';

function AccordionPage () {

    const items=[
        {
            id: '6537',
            label: 'HTML',
            content: 'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables'
        },
        {
            id: '7469',
            label: 'CSS',
            content: 'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).'
        },
        {
            id: '2536',
            label: 'JAVASCRIPT',
            content: 'JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page'
        }
    ];

    return (
        <div>
            App
            <Accordion items={items} />
        </div>
    );
}

export default AccordionPage ;