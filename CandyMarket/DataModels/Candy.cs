using CandyMarket.Api.Enums;
using System;

namespace CandyMarket.Api.DataModels
{
    public class Candy
    {
        public int CandyId { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public int YearsSinceCreation { get; set; }
    }

}
