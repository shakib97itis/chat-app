import DashboardCardItem from "./DashboardCardItem";
import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import Search from "../search/Search";
import PropTypes from "prop-types";

const DashboardCard = ({ cardTitle, searchVisible, items }) => {
  const [isSearchVisible] = useState(searchVisible);

  return (
    <div className="grid grow items-stretch">
      {isSearchVisible && <Search />}

      {/* Dashboard Card Header */}
      <div className="rounded-3xl px-[20px] py-[20px] shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="font-secondary text-xl font-semibold">{cardTitle}</h2>
          <button className="cursor-pointer text-2xl text-primary">
            <IoEllipsisVertical />
          </button>
        </div>

        {/* Dashboard Card List */}
        <ul>
          {items.map((item, index, arr) => {
            const isLastItem = index === arr.length - 1;

            return (
              <DashboardCardItem
                key={item.id}
                isLastItem={isLastItem}
                listTitle={item.title}
                listDescription={item.description}
                listImgUrl={item.imageUrl}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

DashboardCard.defaultProps = {
  searchVisible: false,
  items: [],
};

DashboardCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  searchVisible: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default DashboardCard;
