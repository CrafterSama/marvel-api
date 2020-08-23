import React from 'react';
import PropTypes from 'prop-types';
import {
  NO_DESCRIPTION,
} from '../../../../constants';

import {
  ComicDetail,
  ComicImageBox,
  ComicInfo,
  ComicCreators,
  DetailsItem,
  TextStrong,
} from '../../../../styles';

const ComicDetails = ({ data }) => {

  const publicDate = data && data.dates.filter((o) => o.type === 'onsaleDate')

  const creators = data && data.creators.items;
  const writers = data && creators.filter(c => c.role === 'writer');
  const colorists = data && creators.filter(c => c.role === 'colorist');
  const editors = data && creators.filter(c => c.role === 'editor');
  const artists = data && creators.filter(c => c.role === 'artist');
  const pencilers = data && creators.filter(c => c.role === 'penciler');
  const inkers = data && creators.filter(c => c.role === 'inker');
  const letterers = data && creators.filter(c => c.role === 'letterer');
  const covers = data && creators.filter(c => {
    return (c.role === 'penciler (cover)' || c.role === 'colorist (cover)')
    });

  return (
    <ComicDetail>
      <ComicImageBox>
        <img
          src={`${data && data.thumbnail.path}.${data && data.thumbnail.extension}`}
          alt={data && data.title}
        />
      </ComicImageBox>
      <ComicInfo>
        <h2>{data && data.title}</h2>
        <ComicCreators>
          <DetailsItem>
            <TextStrong>Public Time: </TextStrong>
            {data && publicDate.map((d, key) => (
              <span key={key}>{d.date}</span>
            ))}
          </DetailsItem>
          {data && data.creators && (
            <>
              {writers &&
                <DetailsItem>
                  <>
                    <TextStrong>Writers: </TextStrong>
                  {data && writers.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {pencilers &&
                <DetailsItem>
                  <>
                    <TextStrong>Pencilers: </TextStrong>
                  {data && pencilers.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {artists &&
                <DetailsItem>
                  <>
                    <TextStrong>Artists: </TextStrong>
                  {data && artists.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {colorists &&
                <DetailsItem>
                  <>
                    <TextStrong>Colorists: </TextStrong>
                  {data && colorists.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {editors &&
                <DetailsItem>
                  <>
                    <TextStrong>Editors: </TextStrong>
                  {data && editors.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {inkers &&
                <DetailsItem>
                  <>
                    <TextStrong>Inkers: </TextStrong>
                  {data && inkers.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {letterers &&
                <DetailsItem>
                  <>
                    <TextStrong>Letterers: </TextStrong>
                  {data && letterers.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
              {covers &&
                <DetailsItem>
                  <>
                    <TextStrong>Cover Artists: </TextStrong>
                  {data && covers.map((w, key) => (
                      <span key={key}>{w.name}</span>
                    ))}
                  </>
                </DetailsItem>
              }
            </>
          )}
        </ComicCreators>
        <DetailsItem>
          {data && data.description
            ? data.description
            : NO_DESCRIPTION
          }
        </DetailsItem>
      </ComicInfo>
    </ComicDetail>
  );
};

ComicDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComicDetails;
