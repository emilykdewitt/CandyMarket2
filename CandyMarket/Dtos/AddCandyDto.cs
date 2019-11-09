using CandyMarket.Api.Enums;
namespace CandyMarket.Api.Dtos
{
    public class AddCandyDto
    {
        public int CandyId { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public int YearsSinceCreation { get; set; }
    }

}