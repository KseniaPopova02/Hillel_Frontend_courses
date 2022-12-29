import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledImg = styled.img`
  height: auto;
  width: 300px;
  border-radius: 50%;
  border: 5px solid #f56eb3;
  display: block;
  margin: 0 auto;
`;

const Repo = styled.tr`
  &:nth-child(2n + 1) {
    td {
      background-color: #f56eb3;
    }
  }
`;

const StyledTable = styled.table`
  border: 5px solid #f56eb3;
  border-radius: 5px;
  text-align: left;
`;

const StyledThead = styled.thead``;

const StyledTbody = styled.tbody``;

const UserData = ({
  userData: { login, avatar_url, bio, followers },
  repoData,
}) => {
  return (
    <>
      {login && (
        <>
          <StyledImg src={avatar_url} alt="" />
          <StyledContainer>
            <div>Bio: {bio}</div>
            <p>Followers: {followers}</p>
            <StyledTable cellSpacing="2">
              <StyledThead>
                <tr>
                  <th>Name</th>
                  <th>Link</th>
                  <th>Forks</th>
                  <th>Issues</th>
                </tr>
              </StyledThead>
              <StyledTbody>
                {repoData.map((repo, index) => {
                  if (index > 4) {
                    return;
                  }
                  return (
                    <Repo key={repo.id}>
                      <td>{repo.name}</td>
                      <td>
                        <a href={repo.url}>Open repo</a>
                      </td>
                      <td>{repo.forks_count}</td>
                      <td>{repo.open_issues_count}</td>
                    </Repo>
                  );
                })}
              </StyledTbody>
            </StyledTable>
          </StyledContainer>
        </>
      )}
    </>
  );
};

export default UserData;

UserData.propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number,
  }).isRequired,
  repoData: PropTypes.array,
};
