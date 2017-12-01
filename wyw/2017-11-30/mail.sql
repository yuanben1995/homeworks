USE [mail]
GO
/****** Object:  Table [dbo].[user-mailbox]    Script Date: 12/01/2017 10:37:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[user-mailbox](
	[username] [varchar](50) NOT NULL,
	[mail] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[user]    Script Date: 12/01/2017 10:37:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[user](
	[username] [varchar](50) NOT NULL,
	[mail] [varchar](50) NOT NULL,
	[password] [int] NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[mail-mailbox]    Script Date: 12/01/2017 10:37:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[mail-mailbox](
	[mailId] [varchar](50) NOT NULL,
	[receiver] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[mailbox]    Script Date: 12/01/2017 10:37:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[mailbox](
	[mail] [varchar](50) NOT NULL,
	[password] [int] NOT NULL,
	[mailId] [int] NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[mail]    Script Date: 12/01/2017 10:37:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[mail](
	[mailId] [int] NOT NULL,
	[title] [varchar](50) NOT NULL,
	[text] [varchar](50) NOT NULL,
	[receiver] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
