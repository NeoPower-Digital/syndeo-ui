export interface OrgStats {
  points: number;
  awardedMembers: number;
  funds: number;
}

// TODO: Query from contract
const useQuery = (): OrgStats => {
  const points = 250;
  const awardedMembers = 15;
  const funds = 6000;

  return {
    points,
    awardedMembers,
    funds,
  };
};

export default useQuery;
