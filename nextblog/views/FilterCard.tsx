import { useRequest } from "ahooks";
import { useState } from "react";
import { Button, Card, CardImg, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDocFilter } from "../hooks/useDocFilter";

function FilterCard() {
    const fl = useDocFilter();

    const [keyword_input, set_keyword_input] = useState<string>("");
    const [tags_input, set_tags_input] = useState([]);

    const handleKeywordChange = (e: any) => {
        set_keyword_input(e.target.value);
    };

    const handleTagsChange = (val: any) => {
        set_tags_input(val);
    }

    const checkLoad = () => {
        fl.setFilter({ keyword: keyword_input.split(','), tags: tags_input });
        console.log(fl.getFilter());
    }

    return (
        <Card className=" tw-rounded-2xl tw-border-0">
            <Card.Body>
                <Form.Control type="search"
                    className="rounded-pill shadow-none"
                    placeholder="Input Keywords Here..."
                    value={keyword_input}
                    onChange={handleKeywordChange} />
                <ToggleButtonGroup type="checkbox" size="sm" className=" tw-my-3" value={tags_input} onChange={handleTagsChange}>
                    <ToggleButton variant="outline-primary" className="shadow-none tw-mx-2 rounded-pill" id="c1" value={1}>
                        Option 1
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" className="shadow-none tw-mx-2 rounded-pill" id="c2" value={2}>
                        Option 1
                    </ToggleButton>
                    <ToggleButton variant="outline-danger" className="shadow-none tw-mx-2 rounded-pill" id="c3" value={3}>
                        Option 1
                    </ToggleButton>
                </ToggleButtonGroup>
                <div className=" tw-flex tw-justify-center">
                    <Button as={"div"}
                        className="rounded-pill shadow-none tw-px-6 tw-font-bold"
                        onClick={checkLoad}>Check</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default FilterCard;