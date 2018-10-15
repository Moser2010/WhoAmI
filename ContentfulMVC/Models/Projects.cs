using Contentful.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContentfulMVC.Models
{
    public class Projects
    {
        public string Title { get; set; }
        public bool ShowProject { get; set; }
        public string URL { get; set; }
        public Asset ProjectImage { get; set; }
        public string Description { get; set; }
    }
}
