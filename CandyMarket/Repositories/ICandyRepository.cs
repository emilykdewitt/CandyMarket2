using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;

namespace CandyMarket.Api.Repositories
{
    public interface ICandyRepository
    {
        List<Candy> GetAllCandy();
        Candy AddCandy(Candy newCandy);
        bool EatCandy(int candyIdToDelete);
    }
}