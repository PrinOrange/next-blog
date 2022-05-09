import CheckBroad from './CheckBroad';
import PinnedListBroad from './PinnedListBroad';
import { Card, Tab, Tabs } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { PinnedListModel } from '../model/PinnedListModel';
import { RiPushpinFill } from 'react-icons/ri';
import {useSelector} from 'react-redux'
export default function PinAndCheckCard(props: {
  pinnedList: PinnedListModel;
  filterTags: string[];
}) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body>
        <Tabs variant="pills" defaultActiveKey="pinnedList">
          <Tab
            tabClassName="rounded-pill"
            id="pinnedBroad-tab"
            eventKey="pinnedList"
            title={
              <span>
                <RiPushpinFill className="tw-inline" size={"1em"} />
                {"Pinned"}
              </span>
            }
          >
            <PinnedListBroad list={props.pinnedList} />
          </Tab>
          <Tab
            tabClassName="rounded-pill"
            id="filterBroad-tab"
            eventKey="filter"
            title={
              <span>
                <FaSearch className="tw-inline" size={"1em"} />
                {"Check"}
              </span>
            }
            style={{ minHeight: 450 }}
          >
            <CheckBroad tags={props.filterTags} />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
