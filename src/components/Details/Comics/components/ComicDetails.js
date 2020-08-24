import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import {
  NO_DESCRIPTION,
} from '../../../../constants';
import {
  ComicDetail,
  BoxCover,
  ComicImageBox,
  ComicInfo,
  ComicCreators,
  DetailsItem,
  TextStrong,
} from '../../../../styles';
import { listFromCreators } from '../../../../helpers';

const ComicDetails = ({ data }) => {

  let publicDate;
  let creators;
  let writers;
  let colorists;
  let editors;
  let artists;
  let pencilers;
  let inkers;
  let letterers;
  let covers;

  if (data) {
    creators = data.creators.items;
    publicDate = data.dates.filter((date) => date.type === 'onsaleDate')
    writers = listFromCreators(creators, 'writer');
    colorists = listFromCreators(creators, 'colorist');
    editors = listFromCreators(creators, 'editor');
    artists = listFromCreators(creators, 'artist');
    pencilers = listFromCreators(creators, 'penciler');
    inkers = listFromCreators(creators, 'inker');
    letterers = listFromCreators(creators, 'letterer');
    covers = listFromCreators(creators, 'cover');
  }

  return (
    <ComicDetail>
      <BoxCover>
        <ComicImageBox background={data.thumbnail} />
      </BoxCover>
      <ComicInfo>
        <h2>{data.title}</h2>
        <ComicCreators>
          <DetailsItem>
            <TextStrong>Public Time: </TextStrong>
            {publicDate.map((d, key) => (
              <span key={key}>{moment(d.date).format('LL')}</span>
            ))}
          </DetailsItem>
          {data.creators && (
            <>
              {writers && (
                <DetailsItem>
                  <>
                    <TextStrong>Writers: </TextStrong>
                    <span>{writers}</span>
                  </>
                </DetailsItem>
              )}
              {pencilers && (
                <DetailsItem>
                  <>
                    <TextStrong>Pencilers: </TextStrong>
                    <span>{pencilers}</span>
                  </>
                </DetailsItem>
              )}
              {artists && (
                <DetailsItem>
                  <>
                    <TextStrong>Artists: </TextStrong>
                    <span>{artists}</span>
                  </>
                </DetailsItem>
              )}
              {colorists && (
                <DetailsItem>
                  <>
                    <TextStrong>Colorists: </TextStrong>
                    <span>{colorists}</span>
                  </>
                </DetailsItem>
              )}
              {editors && (
                <DetailsItem>
                  <>
                    <TextStrong>Editors: </TextStrong>
                    <span>{editors}</span>
                  </>
                </DetailsItem>
              )}
              {inkers && (
                <DetailsItem>
                  <>
                    <TextStrong>Inkers: </TextStrong>
                    <span>{inkers}</span>
                  </>
                </DetailsItem>
              )}
              {letterers && (
                <DetailsItem>
                  <>
                    <TextStrong>Letterers: </TextStrong>
                    <span>{letterers}</span>
                  </>
                </DetailsItem>
              )}
              {covers && (
                <DetailsItem>
                  <>
                    <TextStrong>Cover Artists: </TextStrong>
                    <span>{covers}</span>
                  </>
                </DetailsItem>
              )}
            </>
          )}
        </ComicCreators>
        <DetailsItem>
          {data.description ? data.description : NO_DESCRIPTION}
        </DetailsItem>
      </ComicInfo>
    </ComicDetail>
  );
};

ComicDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComicDetails;
