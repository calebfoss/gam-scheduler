JSON.stringify(Array.from([...document.querySelector("#CourseList")
    .querySelectorAll("ol")])
    .reduce((fullList, subjectList) => ({...fullList, [subjectList.id]: Array.from([...
        subjectList.querySelectorAll("[role='treeitem']")])
            .reduce((courseList, course) => {
                const strong = course.querySelector("strong")?.innerHTML;
                if(strong && strong.includes("req"))
                    return {...courseList, [course.id]: strong};
                else
                    return courseList;
            }, {})
        }), {}));
