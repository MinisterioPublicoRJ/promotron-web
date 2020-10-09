import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { useAuth } from '../../../../app/authContext';
import { CustomTable } from '../../../../components';
import { TABLE_COLUMNS } from './investigatedProfileConstants';
import ProfileDetails from './ProfileDetails';
import Api from '../../../../api';
import { Spinner } from '../../../../components/layoutPieces';
import { LoginPromotron } from '../../../../assets';

const propTypes = {
  onToggle: PropTypes.func.isRequired,
  representanteDk: PropTypes.number.isRequired,
};

function InvestigatedProfile({ onToggle, representanteDk }) {
  const [pessDk, setPessDk] = useState(null);
  const { buildRequestParams } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isSimilarProfilesVisible, setIsSimilarProfilesVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getProfileData() {
    let promise;
    setLoading(true);
    try {
      promise =
        typeof pessDk === 'number'
          ? Api.getInvestigatedProfile({
              ...buildRequestParams(),
              representanteDk,
              pessDk,
            })
          : Api.getInvestigatedProfile({
              ...buildRequestParams(),
              representanteDk,
            });

      const data = await promise;
      setProfileData(data);
      setTableData(data.procedimentos ? data.procedimentos : []);
      return data;
    } catch (error) {
      setApiError(true);
      return error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pessDk]);

  function renderComponent() {
    if (apiError) {
      return (
        <article className="investigatedProfile-outer">
          <h2>
            <strong>Perfil do Investigado</strong>
          </h2>
          Erro de api!
        </article>
      );
    }
    if (loading && !profileData) {
      return (
        <article className="investigatedProfile-outer">
          <Spinner size="large" />
        </article>
      );
    }
    if (profileData && profileData.perfil) {
      return (
        <article className="investigatedProfile-outer">
          <div className="investigatedProfile-header">
            <h2>
              <strong>Perfil do Investigado</strong>
            </h2>
            <ProfileDetails
              perfil={profileData.perfil}
              key={`${profileData.perfil.pess_dk}-main`}
            />
            <LoginPromotron height={150} />
          </div>

          <button
            type="button"
            className="similar-profiles-btn"
            onClick={() => setIsSimilarProfilesVisible((prevValue) => !prevValue)}
          >
            Foram encontrados {profileData.similares.length}
{' '}
perfis similares ao solicitado
<div
              className={`similar-profiles-arrow ${
                isSimilarProfilesVisible ? 'similar-profiles-arrow--rotated' : ''
              }`}
            />
          </button>

          <div
            className={`similar-profiles-list ${
              isSimilarProfilesVisible ? 'similar-profiles-list--visible' : ''
            }`}
          >
            {profileData.similares.map((similarProfile) => {
              return (
                <button
                  onClick={(e) => {
                    setPessDk((prevValue) =>
                      prevValue === similarProfile.pess_dk ? null : similarProfile.pess_dk,
                    );
                  }}
                  className={similarProfile.pess_dk === pessDk ? 'current' : ''}
                  type="button"
                  key={`${similarProfile.pess_dk}-button`}
                >
                  <ProfileDetails perfil={similarProfile} key={similarProfile.pess_dk} />
                </button>
              );
            })}
          </div>

          <div className="investigatedProfile-tableWrapper">
            {loading ? (
              <Spinner size="medium" />
            ) : (
              <CustomTable data={tableData} columns={TABLE_COLUMNS} showHeader />
            )}
          </div>

          <div className="profile-close">
            <button type="button" className="close" aria-label="Fechar" onClick={onToggle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </article>
      );
    }
    return null;
  }
  return renderComponent();
}

InvestigatedProfile.propTypes = propTypes;
export default InvestigatedProfile;
