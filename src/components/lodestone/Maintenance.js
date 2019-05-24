import React from 'react';

const Maintenance = ({ maintenance }) => {
  const renderMaintenance = () => {
    console.log(maintenance);

    return (
      maintenance !== undefined &&
      maintenance.map(item => {
        const { Tag, Time, Title, Url } = item;

        return (
          <li key={Time}>
            <a href={Url} target='_new'>
              <h3>
                {Title}
                <small>{Tag}</small>
              </h3>
            </a>
          </li>
        );
      })
    );
  };

  return <ul className='content is-small'>{renderMaintenance()}</ul>;
};

export default Maintenance;
