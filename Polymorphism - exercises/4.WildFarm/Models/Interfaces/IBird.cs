﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.WildFarm.Models.Interfaces
{
    public interface IBird : IAnimal
    {
        public double WingSize { get; }
    }
}
